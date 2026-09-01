import React from "react";

const AdminDashboard = () => {
  return (
    <div style={styles.app}>

      {/* SIDEBAR */}
      <aside style={styles.sidebar}>

        <div>
          <h2 style={styles.logo}>UPTOSKILL</h2>
          <p style={styles.portal}>Internship Management Portal</p>
        </div>

        <nav style={styles.nav}>

          <button style={{ ...styles.navItem, ...styles.active }}>
            🏠 Dashboard
          </button>

          <button style={styles.navItem}>
            👥 User Management
          </button>

          <button style={styles.navItem}>
            📄 Certificate Templates
          </button>

          <button style={styles.navItem}>
            📊 Analytics
          </button>

          <button style={styles.navItem}>
            📝 Audit Logs
          </button>

          <button style={styles.navItem}>
            ⚙️ System Management
          </button>

        </nav>

        <button style={styles.logout}>
          🚪 Logout
        </button>

        <div style={styles.profile}>
          <div style={styles.avatar}>A</div>

          <div>
            <strong>Admin</strong>
            <small style={styles.role}>Administrator</small>
          </div>
        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main style={styles.main}>

        {/* HEADER */}
        <header style={styles.header}>

          <div>
            <h1 style={styles.heading}>
              Admin Dashboard
            </h1>

            <p style={styles.subHeading}>
              Manage users, certificates and system activities
            </p>
          </div>

          <div style={styles.headerUser}>
            <div style={styles.smallAvatar}>A</div>

            <div>
              <strong>Admin</strong>
              <small style={styles.role}>Administrator</small>
            </div>
          </div>

        </header>


        {/* WELCOME */}
        <section style={styles.welcome}>

          <div style={styles.welcomeIcon}>
            👋
          </div>

          <div>
            <h2 style={styles.welcomeTitle}>
              Welcome back, Admin!
            </h2>

            <p style={styles.welcomeText}>
              Here's an overview of the internship management system.
            </p>
          </div>

        </section>


        {/* STATISTICS */}
        <section style={styles.stats}>

          <StatCard
            icon="👥"
            title="Total Users"
            value="0"
          />

          <StatCard
            icon="📄"
            title="Certificate Requests"
            value="0"
          />

          <StatCard
            icon="⏳"
            title="Pending Requests"
            value="0"
          />

          <StatCard
            icon="✅"
            title="Approved Certificates"
            value="0"
          />

        </section>


        {/* USER MANAGEMENT */}
        <section style={styles.card}>

          <div style={styles.sectionHeader}>

            <div>
              <h2 style={styles.sectionTitle}>
                User Management
              </h2>

              <p style={styles.description}>
                Create and manage intern and user accounts.
              </p>
            </div>

            <button style={styles.primaryButton}>
              + Create Intern Account
            </button>

          </div>

          <div style={styles.emptyBox}>
            No users to display yet.
          </div>

        </section>


        {/* CERTIFICATE TEMPLATES */}
        <section style={styles.card}>

          <div style={styles.sectionHeader}>

            <div>
              <h2 style={styles.sectionTitle}>
                Certificate Templates
              </h2>

              <p style={styles.description}>
                Upload, edit and manage certificate templates.
              </p>
            </div>

            <button style={styles.primaryButton}>
              + Add Template
            </button>

          </div>

          <div style={styles.emptyBox}>
            No certificate templates available.
          </div>

        </section>


        {/* ANALYTICS */}
        <section style={styles.card}>

          <h2 style={styles.sectionTitle}>
            Analytics
          </h2>

          <p style={styles.description}>
            Monitor certificate requests, approval rate and
            average turnaround time.
          </p>

          <div style={styles.analytics}>

            <div style={styles.analyticsBox}>
              <span>Requests Per Month</span>
              <strong>0</strong>
            </div>

            <div style={styles.analyticsBox}>
              <span>Approval Rate</span>
              <strong>0%</strong>
            </div>

            <div style={styles.analyticsBox}>
              <span>Average Turnaround</span>
              <strong>0 days</strong>
            </div>

          </div>

        </section>


        {/* AUDIT LOGS */}
        <section style={styles.card}>

          <div style={styles.sectionHeader}>

            <div>
              <h2 style={styles.sectionTitle}>
                Audit Logs
              </h2>

              <p style={styles.description}>
                View important administrative activities.
              </p>
            </div>

            <button style={styles.secondaryButton}>
              View All Logs
            </button>

          </div>

          <div style={styles.emptyBox}>
            No audit logs available.
          </div>

        </section>


        {/* SYSTEM MANAGEMENT */}
        <section style={styles.card}>

          <h2 style={styles.sectionTitle}>
            System Management
          </h2>

          <p style={styles.description}>
            Configure retention policies, user roles and system controls.
          </p>

          <button style={styles.secondaryButton}>
            Manage System Settings
          </button>

        </section>

      </main>

    </div>
  );
};


/* STAT CARD */

const StatCard = ({ icon, title, value }) => {

  return (
    <div style={styles.statCard}>

      <div style={styles.statIcon}>
        {icon}
      </div>

      <div>
        <span style={styles.statTitle}>
          {title}
        </span>

        <h2 style={styles.statValue}>
          {value}
        </h2>
      </div>

    </div>
  );
};


/* STYLES */

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
    boxSizing: "border-box",
  },

  logo: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "800",
  },

  portal: {
    fontSize: "12px",
    color: "#b7c3d4",
    marginTop: "6px",
  },

  nav: {
    marginTop: "35px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  navItem: {
    border: "none",
    background: "transparent",
    color: "#d8e0ec",
    padding: "13px 12px",
    textAlign: "left",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
  },

  active: {
    background: "#1268d5",
    color: "white",
  },

  logout: {
    marginTop: "auto",
    border: "none",
    background: "transparent",
    color: "#d8e0ec",
    padding: "13px 12px",
    textAlign: "left",
    fontSize: "14px",
    cursor: "pointer",
  },

  profile: {
    marginTop: "10px",
    background: "#102947",
    padding: "12px",
    borderRadius: "9px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  avatar: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "#dce8f8",
    color: "#172033",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  role: {
    display: "block",
    fontSize: "11px",
    color: "#94a3b8",
    marginTop: "3px",
  },

  main: {
    marginLeft: "245px",
    padding: "30px",
    width: "calc(100% - 245px)",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },

  heading: {
    margin: 0,
    fontSize: "30px",
  },

  subHeading: {
    color: "#64748b",
    marginTop: "7px",
  },

  headerUser: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  smallAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#1268d5",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  welcome: {
    background: "#e8f5ff",
    padding: "25px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "25px",
  },

  welcomeIcon: {
    fontSize: "30px",
  },

  welcomeTitle: {
    margin: 0,
  },

  welcomeText: {
    marginBottom: 0,
    color: "#64748b",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
    marginBottom: "25px",
  },

  statCard: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  statIcon: {
    fontSize: "25px",
  },

  statTitle: {
    color: "#64748b",
    fontSize: "13px",
  },

  statValue: {
    margin: "5px 0 0",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "22px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },

  sectionTitle: {
    margin: 0,
    fontSize: "20px",
  },

  description: {
    color: "#64748b",
    fontSize: "14px",
    marginTop: "7px",
  },

  primaryButton: {
    border: "none",
    background: "#1268d5",
    color: "white",
    padding: "11px 16px",
    borderRadius: "7px",
    cursor: "pointer",
    fontWeight: "600",
  },

  secondaryButton: {
    border: "1px solid #cbd5e1",
    background: "white",
    color: "#172033",
    padding: "10px 15px",
    borderRadius: "7px",
    cursor: "pointer",
  },

  emptyBox: {
    marginTop: "20px",
    padding: "30px",
    textAlign: "center",
    border: "1px dashed #cbd5e1",
    borderRadius: "8px",
    color: "#64748b",
  },

  analytics: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    marginTop: "20px",
  },

  analyticsBox: {
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

};

export default AdminDashboard;