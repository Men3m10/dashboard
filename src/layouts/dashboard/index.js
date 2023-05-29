import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function Dashboard() {
  const [clubCount, setClubCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [clinicCount, setClinicCount] = useState(0);
  const [physioClinicCount, setPhysioClinicCount] = useState(0);

  useEffect(() => {
    // Fetch club count
    fetch("https://nutrigym.onrender.com/api/v1/club")
      .then((response) => response.json())
      .then((data) => {
        const clubCount = data.result;
        if (!data.result) {
          setClubCount(0);
        } else {
          setClubCount(clubCount);
        }
      })
      .catch((error) => {
        console.error("Error fetching club count:", error);
      });

    // Fetch product count
    fetch("https://nutrigym.onrender.com/api/v1/prod")
      .then((response) => response.json())
      .then((data) => {
        const productCount = data.result;
        if (!data.result) {
          setProductCount(0);
        } else {
          setProductCount(productCount);
        }
      })
      .catch((error) => {
        console.error("Error fetching product count:", error);
      });

    // Fetch clinic count
    fetch("https://nutrigym.onrender.com/api/v1/clinc")
      .then((response) => response.json())
      .then((data) => {
        const clinicCount = data.result;
        if (!data.result) {
          setClinicCount(0);
        } else {
          setClinicCount(clinicCount);
        }
      })
      .catch((error) => {
        console.error("Error fetching clinic count:", error);
      });

    // Fetch physiotherapy clinic count
    fetch("https://nutrigym.onrender.com/api/v1/phyclinic")
      .then((response) => response.json())
      .then((data) => {
        const physioClinicCount = data.result;
        if (!data.result) {
          setPhysioClinicCount(0);
        } else {
          setPhysioClinicCount(physioClinicCount);
        }
      })
      .catch((error) => {
        console.error("Error fetching physiotherapy clinic count:", error);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Clubs"
                count={clubCount}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Clinics"
                count={clinicCount}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Physiotherapy clinic"
                count={physioClinicCount}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Products"
                count={productCount}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}></MDBox>
      </MDBox>
      {/* Rest of the code */}
    </DashboardLayout>
  );
}

export default Dashboard;
