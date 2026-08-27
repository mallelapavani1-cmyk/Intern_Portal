import React, { useEffect, useState } from "react";
import { getMe } from "../services/auth.service";
const formatDate = (date) => {
  if (!date) return "Not available";

  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const InternDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getMe();
        setUser(data.user);
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  if (loading) {
    return <div style={{ padding: "40px" }}>Loading dashboard...</div>;
  }

  return (
    <div style={styles.app}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.logo}>
          <div style={styles.logoTitle}>
            UPTO<span>SKILL</span>
          </div>
          <div style={styles.logoSubtitle}>Internship Management Portal</div>
        </div>

        <nav style={styles.nav}>
          <button style={{ ...styles.navItem, ...styles.activeNav }}>
            🏠 <span>Dashboard</span>
          </button>

          <button style={styles.navItem}>
            💼 <span>My Internship</span>
          </button>

          <button style={styles.navItem}>
            📄 <span>Certificate Requests</span>
          </button>

          <button style={styles.navItem}>
            👤 <span>My Profile</span>
          </button>

          <button style={styles.navItem}>
            🤖 <span>AI Assistant</span>
          </button>

          <button style={styles.logout}>
            🚪 <span>Logout</span>
          </button>
        </nav>

        <div style={styles.sidebarProfile}>
          <div style={styles.avatar}>👤</div>
          <div>
            <strong>Intern</strong>
            <small>Intern Code</small>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Header */}
        <header style={styles.header}>
          <h1>Dashboard</h1>

          <div style={styles.user}>
            <div style={styles.smallAvatar}>👤</div>
            <div>
              <strong>Intern</strong>
              <small>Intern Code</small>
            </div>
          </div>
        </header>

        {/* Welcome */}
        <section style={styles.welcome}>
          <div style={styles.welcomeIcon}>👋</div>

          <div>
            <h2>Welcome back, {user?.fullName || "Intern"}!</h2>
            <p>
              Here's an overview of your internship and certificate requests.
            </p>

            <div style={styles.code}>
              🔒 Intern Code: <strong>{user?.internCode || "Not available"}</strong>
            </div>
          </div>
        </section>

        {/* Internship */}
        <section style={styles.card}>
          <div style={styles.cardTitle}>
            <span style={styles.iconCircle}>💼</span>
            <h2>My Internship</h2>
          </div>

          <div style={styles.infoGrid}>
            <InfoItem label="Intern Name" value={user?.fullName || "Not available"} />
            <InfoItem label="Intern Code" value={user?.internCode || "Not available"} />
            <InfoItem label="Internship Status" value="Ongoing" status />
            <InfoItem label="Domain" value={user?.domain || "Not available"} />
            <InfoItem label="Mentor" value="Loading..." />
            <InfoItem label="Start Date" value={formatDate(user?.startDate)} />
            <InfoItem label="End Date" value={formatDate(user?.endDate)} />
          </div>
        </section>

        {/* Certificate Requests */}
        <section style={styles.card}>
          <div style={styles.requestHeader}>
            <div style={styles.cardTitle}>
              <span style={styles.iconCircle}>📄</span>
              <h2>Certificate Requests</h2>
            </div>

            <button style={styles.primaryButton}>
              + Request Certificate
            </button>
          </div>

          <div style={styles.table}>
            <div style={styles.tableHeader}>
              <span>Certificate Type</span>
              <span>Requested Date</span>
              <span>Status</span>
            </div>

            <div style={styles.empty}>
              No certificate requests yet.
            </div>
          </div>
        </section>
      </main>

      {/* AI Assistant */}
      <button style={styles.aiButton}>🤖</button>
    </div>
  );
};

const InfoItem = ({ label, value, status }) => (
  <div style={styles.infoItem}>
    <span style={styles.label}>{label}</span>

    {status ? (
      <span style={styles.status}>{value}</span>
    ) : (
      <strong>{value}</strong>
    )}
  </div>
);

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    background: "#f5f7fb",
    color: "#172033",
    fontFamily: "Arial, sans-serif",
  },

  sidebar: {
    width: "245px",
    background: "#071b35",
    color: "white",
    padding: "25px 15px",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
  },

  logo: {
    padding: "5px 12px 30px",
  },

  logoTitle: {
    fontSize: "25px",
    fontWeight: "800",
  },

  logoSubtitle: {
    fontSize: "12px",
    color: "#b7c3d4",
    marginTop: "5px",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  navItem: {
    border: "none",
    background: "transparent",
    color: "#d8e0ec",
    padding: "14px 12px",
    textAlign: "left",
    borderRadius: "7px",
    fontSize: "15px",
    cursor: "pointer",
  },

  activeNav: {
    background: "#1268d5",
    color: "white",
  },

  logout: {
    marginTop: "20px",
    border: "none",
    background: "transparent",
    color: "#d8e0ec",
    padding: "14px 12px",
    textAlign: "left",
    fontSize: "15px",
    cursor: "pointer",
  },

  sidebarProfile: {
    marginTop: "auto",
    background: "#102947",
    padding: "15px",
    borderRadius: "8px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#dce8f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  smallAvatar: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "#e5eaf1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  main: {
    marginLeft: "245px",
    width: "calc(100% - 245px)",
    paddingBottom: "40px",
  },

  header: {
    height: "75px",
    background: "white",
    borderBottom: "1px solid #e5e8ee",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 35px",
  },


  user: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  welcome: {
    margin: "28px",
    padding: "28px",
    background: "#eaf3ff",
    borderRadius: "10px",
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },

  welcomeIcon: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    background: "#62a7ed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
  },

  card: {
    background: "white",
    margin: "25px 28px",
    padding: "25px",
    borderRadius: "10px",
    border: "1px solid #e3e7ed",
  },

  cardTitle: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "25px",
  },

  iconCircle: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "#eaf3ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px",
  },

  infoItem: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    color: "#697386",
    fontSize: "13px",
  },

  status: {
    background: "#d9f7e5",
    color: "#16834b",
    padding: "6px 12px",
    borderRadius: "20px",
    width: "fit-content",
    fontSize: "13px",
  },

  requestHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  primaryButton: {
    border: "none",
    background: "#1268d5",
    color: "white",
    padding: "11px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    padding: "14px",
    background: "#f5f7fa",
    fontWeight: "600",
    fontSize: "14px",
  },

  empty: {
    textAlign: "center",
    padding: "35px",
    color: "#7a8494",
  },

  code: {
    marginTop: "15px",
    color: "#42516a",
  },

  aiButton: {
    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    border: "none",
    background: "#1268d5",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 5px 18px rgba(0,0,0,0.2)",
  },
};

export default InternDashboard;