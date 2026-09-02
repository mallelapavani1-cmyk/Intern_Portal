import React, { useState } from "react";

const TLDashboard = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [remarks, setRemarks] = useState("");
  const [requestStatus, setRequestStatus] = useState("pending");
  const [showSuccess, setShowSuccess] = useState(false);

  const sampleRequest = {
    internName: "Sample Intern",
    internCode: "INT001",
    certificateType: "Internship Certificate",
    requestedDate: "27 Aug 2026",
    domain: "Web Development",
    companyName: "UPTOSKILL",
    startDate: "01 Jun 2026",
    endDate: "31 Aug 2026",
    internshipStatus: "Completed",
  };

  const openRequest = () => {
    setSelectedRequest(sampleRequest);
    setRemarks("");
    setRequestStatus("pending");
    setShowSuccess(false);
  };

  const closeRequest = () => {
    setSelectedRequest(null);
    setRemarks("");
    setShowSuccess(false);
  };

  const handleApprove = () => {
    setRequestStatus("approved");
    setShowSuccess(true);
  };

  const handleReject = () => {
    if (!remarks.trim()) {
      alert("Please add a remark before rejecting the request.");
      return;
    }

    setRequestStatus("rejected");
    setShowSuccess(true);
  };

  return (
    <div style={styles.page}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <div>
          <div style={styles.logo}>UPTOSKILL</div>

          <div style={styles.subtitle}>
            Internship Management Portal
          </div>
        </div>

        <nav style={styles.nav}>
          <div style={{ ...styles.navItem, ...styles.active }}>
            🏠 <span>Dashboard</span>
          </div>

          <div style={styles.navItem}>
            📋 <span>Pending Requests</span>
          </div>

          <div style={styles.navItem}>
            📄 <span>Certificate Templates</span>
          </div>

          <div style={styles.navItem}>
            🚪 <span>Logout</span>
          </div>
        </nav>

        <div style={styles.profileBox}>
          <div style={styles.avatar}>👤</div>

          <div>
            <strong>TL</strong>

            <div style={styles.profileText}>
              TL Dashboard
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={styles.main}>
        {/* HEADER */}
        <header style={styles.header}>
          <h1>TL Dashboard</h1>

          <div style={styles.user}>
            <div style={styles.userAvatar}>👤</div>

            <div>
              <strong>TL</strong>

              <div style={styles.userRole}>
                Team Leader
              </div>
            </div>
          </div>
        </header>

        {/* WELCOME */}
        <section style={styles.welcome}>
          <div style={styles.welcomeIcon}>👋</div>

          <div>
            <h2>
              Welcome back, TL!
            </h2>

            <p>
              Review internship certificate requests, verify internship
              details and manage certificate generation.
            </p>
          </div>
        </section>

        {/* SUMMARY CARDS */}
        <section style={styles.cards}>
          <SummaryCard
            icon="📋"
            title="Pending Requests"
            number="0"
          />

          <SummaryCard
            icon="✅"
            title="Approved"
            number="0"
          />

          <SummaryCard
            icon="❌"
            title="Rejected"
            number="0"
          />
        </section>

        {/* PENDING REQUESTS */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <h2>
                Pending Certificate Requests
              </h2>

              <p>
                Review and verify certificate requests submitted by interns.
              </p>
            </div>

            <button style={styles.primaryButton}>
              ↻ Refresh Requests
            </button>
          </div>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>
                    Intern Name
                  </th>

                  <th style={styles.th}>
                    Intern Code
                  </th>

                  <th style={styles.th}>
                    Certificate Type
                  </th>

                  <th style={styles.th}>
                    Requested Date
                  </th>

                  <th style={styles.th}>
                    Status
                  </th>

                  <th style={styles.th}>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={styles.td}>
                    {sampleRequest.internName}
                  </td>

                  <td style={styles.td}>
                    {sampleRequest.internCode}
                  </td>

                  <td style={styles.td}>
                    {sampleRequest.certificateType}
                  </td>

                  <td style={styles.td}>
                    {sampleRequest.requestedDate}
                  </td>

                  <td style={styles.td}>
                    <span style={styles.pendingBadge}>
                      Pending
                    </span>
                  </td>

                  <td style={styles.td}>
                    <button
                      style={styles.viewButton}
                      onClick={openRequest}
                    >
                      Review
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CERTIFICATE TEMPLATES */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <h2>
                Certificate Templates
              </h2>

              <p>
                Manage the templates used when generating internship
                certificates.
              </p>
            </div>

            <button style={styles.primaryButton}>
              + Manage Templates
            </button>
          </div>

          <div style={styles.templateGrid}>
            <div style={styles.templateCard}>
              <div style={styles.templateIcon}>
                📜
              </div>

              <h3>
                Certificate Templates
              </h3>

              <p>
                View, add, edit and manage certificate templates.
              </p>

              <button style={styles.secondaryButton}>
                Manage Templates
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* REVIEW REQUEST MODAL */}
      {selectedRequest && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            {/* MODAL HEADER */}
            <div style={styles.modalHeader}>
              <div>
                <h2>
                  Review Certificate Request
                </h2>

                <p style={styles.modalSubText}>
                  Verify internship details before taking action.
                </p>
              </div>

              <button
                style={styles.closeButton}
                onClick={closeRequest}
              >
                ✕
              </button>
            </div>

            {/* REQUEST DETAILS */}
            <div style={styles.detailsGrid}>
              <Detail
                label="Intern Name"
                value={selectedRequest.internName}
              />

              <Detail
                label="Intern Code"
                value={selectedRequest.internCode}
              />

              <Detail
                label="Certificate Type"
                value={selectedRequest.certificateType}
              />

              <Detail
                label="Requested Date"
                value={selectedRequest.requestedDate}
              />
            </div>

            {/* VERIFY INTERNSHIP DETAILS */}
            <div style={styles.verifySection}>
              <div style={styles.verifyHeader}>
                <div>
                  <h3>
                    🔍 Verify Internship Details
                  </h3>

                  <p>
                    Check these details before approving the request.
                  </p>
                </div>

                <span style={styles.verifyBadge}>
                  Verification Required
                </span>
              </div>

              <div style={styles.internshipGrid}>
                <Detail
                  label="Company"
                  value={selectedRequest.companyName}
                />

                <Detail
                  label="Domain"
                  value={selectedRequest.domain}
                />

                <Detail
                  label="Start Date"
                  value={selectedRequest.startDate}
                />

                <Detail
                  label="End Date"
                  value={selectedRequest.endDate}
                />

                <Detail
                  label="Internship Status"
                  value={selectedRequest.internshipStatus}
                />
              </div>
            </div>

            {/* REMARKS */}
            <div style={styles.remarksSection}>
              <label style={styles.remarksLabel}>
                Remarks
              </label>

              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter remarks for this request..."
                style={styles.textarea}
              />
            </div>

            {/* APPROVAL RESULT */}
            {showSuccess && requestStatus === "approved" && (
              <div style={styles.approvedBox}>
                <strong>
                  ✅ Request Approved
                </strong>

                <p>
                  Certificate generation has been triggered.
                </p>

                <span>
                  The certificate can now be generated using the selected
                  certificate template.
                </span>
              </div>
            )}

            {showSuccess && requestStatus === "rejected" && (
              <div style={styles.rejectedBox}>
                <strong>
                  ❌ Request Rejected
                </strong>

                <p>
                  The rejection remark has been recorded.
                </p>
              </div>
            )}

            {/* ACTION BUTTONS */}
            {!showSuccess && (
              <div style={styles.actionButtons}>
                <button
                  style={styles.rejectButton}
                  onClick={handleReject}
                >
                  ❌ Reject
                </button>

                <button
                  style={styles.approveButton}
                  onClick={handleApprove}
                >
                  ✅ Approve & Generate Certificate
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

/* SUMMARY CARD */

const SummaryCard = ({ icon, title, number }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>
        {icon}
      </div>

      <div>
        <div style={styles.cardTitle}>
          {title}
        </div>

        <div style={styles.cardNumber}>
          {number}
        </div>
      </div>
    </div>
  );
};

/* DETAIL */

const Detail = ({ label, value }) => {
  return (
    <div style={styles.detail}>
      <span style={styles.detailLabel}>
        {label}
      </span>

      <strong>
        {value}
      </strong>
    </div>
  );
};

/* STYLES */

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    background: "#f5f7fb",
    fontFamily: "Arial, sans-serif",
    color: "#172033",
  },

  sidebar: {
    width: "250px",
    minHeight: "100vh",
    background: "#071b35",
    color: "white",
    padding: "25px 18px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
  },

  logo: {
    fontSize: "26px",
    fontWeight: "800",
    letterSpacing: "1px",
  },

  subtitle: {
    fontSize: "11px",
    color: "#9fb0c7",
    marginTop: "4px",
  },

  nav: {
    marginTop: "45px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  navItem: {
    padding: "14px 15px",
    borderRadius: "8px",
    display: "flex",
    gap: "12px",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "14px",
  },

  active: {
    background: "#1769e0",
  },

  profileBox: {
    marginTop: "auto",
    background: "#102b4d",
    padding: "14px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  avatar: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "#e8edf5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  profileText: {
    fontSize: "11px",
    color: "#aebdd0",
    marginTop: "3px",
  },

  main: {
    flex: 1,
    marginLeft: "250px",
    padding: "28px 35px",
    overflowY: "auto",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },

  user: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  userAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#e7edf7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  userRole: {
    fontSize: "11px",
    color: "#777",
    marginTop: "3px",
  },

  welcome: {
    background: "#eaf3ff",
    borderRadius: "12px",
    padding: "25px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "25px",
  },

  welcomeIcon: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    background: "#d4e9ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
    marginBottom: "25px",
  },

  card: {
    background: "white",
    borderRadius: "12px",
    padding: "22px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },

  cardIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "10px",
    background: "#edf4ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },

  cardTitle: {
    fontSize: "13px",
    color: "#6d7785",
  },

  cardNumber: {
    fontSize: "26px",
    fontWeight: "700",
    marginTop: "4px",
  },

  section: {
    background: "white",
    borderRadius: "12px",
    padding: "25px",
    marginBottom: "25px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    padding: "14px",
    textAlign: "left",
    background: "#f8fafc",
    borderBottom: "1px solid #e2e8f0",
    fontSize: "13px",
  },

  td: {
    padding: "14px",
    borderBottom: "1px solid #e2e8f0",
    fontSize: "13px",
  },

  primaryButton: {
    border: "none",
    background: "#1769e0",
    color: "white",
    padding: "11px 18px",
    borderRadius: "7px",
    cursor: "pointer",
    fontWeight: "600",
  },

  secondaryButton: {
    border: "1px solid #1769e0",
    background: "white",
    color: "#1769e0",
    padding: "10px 16px",
    borderRadius: "7px",
    cursor: "pointer",
    fontWeight: "600",
  },

  viewButton: {
    border: "none",
    background: "#e8f2ff",
    color: "#1769e0",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },

  pendingBadge: {
    background: "#fff7ed",
    color: "#c2410c",
    padding: "5px 10px",
    borderRadius: "15px",
    fontSize: "12px",
  },

  templateGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
  },

  templateCard: {
    border: "1px solid #e3e8ef",
    borderRadius: "10px",
    padding: "20px",
  },

  templateIcon: {
    fontSize: "28px",
    marginBottom: "10px",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 1000,
  },

  modal: {
    width: "100%",
    maxWidth: "720px",
    maxHeight: "90vh",
    overflowY: "auto",
    background: "white",
    borderRadius: "14px",
    padding: "28px",
    boxSizing: "border-box",
  },

  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "25px",
  },

  modalSubText: {
    color: "#6d7785",
    fontSize: "13px",
  },

  closeButton: {
    border: "none",
    background: "#f1f5f9",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    cursor: "pointer",
  },

  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginBottom: "20px",
  },

  detail: {
    background: "#f8fafc",
    padding: "14px",
    borderRadius: "8px",
  },

  detailLabel: {
    display: "block",
    color: "#6d7785",
    fontSize: "12px",
    marginBottom: "5px",
  },

  verifySection: {
    background: "#eff6ff",
    borderRadius: "10px",
    padding: "18px",
    marginBottom: "20px",
  },

  verifyHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "15px",
    marginBottom: "15px",
  },

  verifyBadge: {
    background: "#dbeafe",
    color: "#1d4ed8",
    padding: "6px 10px",
    borderRadius: "15px",
    fontSize: "11px",
    whiteSpace: "nowrap",
  },

  internshipGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },

  remarksSection: {
    marginTop: "20px",
  },

  remarksLabel: {
    display: "block",
    fontWeight: "600",
    marginBottom: "8px",
  },

  textarea: {
    width: "100%",
    minHeight: "100px",
    resize: "vertical",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    padding: "12px",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
  },

  actionButtons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "20px",
  },

  rejectButton: {
    border: "none",
    background: "#dc2626",
    color: "white",
    padding: "11px 18px",
    borderRadius: "7px",
    cursor: "pointer",
    fontWeight: "600",
  },

  approveButton: {
    border: "none",
    background: "#16a34a",
    color: "white",
    padding: "11px 18px",
    borderRadius: "7px",
    cursor: "pointer",
    fontWeight: "600",
  },

  approvedBox: {
    background: "#ecfdf5",
    border: "1px solid #86efac",
    padding: "16px",
    borderRadius: "9px",
    marginTop: "20px",
    color: "#166534",
  },

  rejectedBox: {
    background: "#fef2f2",
    border: "1px solid #fca5a5",
    padding: "16px",
    borderRadius: "9px",
    marginTop: "20px",
    color: "#991b1b",
  },
};

export default TLDashboard;