import useCertificateRequests from '../hooks/useCertificateRequests';
import StatusBadge from '../../shared/components/StatusBadge';
import './MyRequestsList.css';

const formatDate = (date) => date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '—';

export default function MyRequestsList() {
  const { requests, loading, error, refetch } = useCertificateRequests();
  return <section className="requests-panel" aria-labelledby="my-requests-title">
    <div className="requests-panel-heading"><div><p className="request-eyebrow">REQUEST HISTORY</p><h2 id="my-requests-title">My certificate requests</h2></div><button className="requests-refresh" type="button" onClick={refetch}>Refresh</button></div>
    {loading && <p className="requests-state">Loading requests…</p>}
    {!loading && error && <p className="requests-state requests-error" role="alert">{error}</p>}
    {!loading && !error && !requests.length && <p className="requests-state">No requests yet</p>}
    {!loading && !error && requests.length > 0 && <div className="requests-table-wrap"><table className="requests-table"><thead><tr><th>Request</th><th>Certificate</th><th>Status</th><th>Requested</th></tr></thead><tbody>{requests.map((request) => <tr key={request._id || request.id || request.requestNumber}><td>{request.requestNumber || '—'}</td><td>{request.certificateType?.replaceAll('_', ' ') || '—'}</td><td><StatusBadge status={request.status} /></td><td>{formatDate(request.requestedAt || request.createdAt)}</td></tr>)}</tbody></table></div>}
  </section>;
}