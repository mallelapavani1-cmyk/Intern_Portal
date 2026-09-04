import User from '../models/User.js';
import CertificateRequest from '../models/CertificateRequest.js';

const ALLOWED_TYPES = [
  'offer_letter', 'bonafide', 'ojt_certificate', 'experience_letter',
  'completion_certificate', 'intern_of_month', 'league_winner', 'custom'
];



const generateRequestNumber = async () => {
  const year = new Date().getFullYear();
  const count = await CertificateRequest.countDocuments();
  return `CERT-${year}-${String(count + 1).padStart(5, '0')}`;
};



export const submitCertificateRequest = async (req, res) => {
  try {
    const { certificateType, reason } = req.body;

    if (!certificateType || !ALLOWED_TYPES.includes(certificateType)) {
      return res.status(400).json({ message: 'Valid certificate type is required' });
    }

    // intern details auto-filled from the logged-in user — nothing typed by intern
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.startDate) {
      return res.status(404).json({ message: 'No internship details found for this account' });
    }

    const existingPending = await CertificateRequest.findOne({
      userId: req.user.id,
      certificateType,
      status: { $in: ['pending', 'processing'] }
    });
    if (existingPending) {
      return res.status(409).json({ message: 'You already have a request in progress for this certificate type' });
    }

    const requestNumber = await generateRequestNumber();

    const request = await CertificateRequest.create({
      requestNumber,
      userId: req.user.id,
      internCode: user.internCode,
      certificateType,
      reason
    });

    res.status(201).json({ request });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};




export const getMyRequests = async (req, res) => {
  try {
    const requests = await CertificateRequest.find({ userId: req.user.id }).sort({ requestedAt: -1 });
    res.json({ requests });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};




export const getProfile = async (req, res) => {
  try {
    // req.user is set by verifyToken middleware after decoding the JWT — { id, role }
    const user = await User.findById(req.user.id)
      .select('-password') // never send password back, even hashed

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
