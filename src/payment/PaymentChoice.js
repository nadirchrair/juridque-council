// PaymentChoice.js
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import PaymentOption from "./PaymentOption";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
// Importing logos for each payment option (You can replace with actual paths)
import ccpLogo from './logos/ccp.png';     // Path to CCP logo
import visaLogo from './logos/visa.jpeg';   // Path to Visa logo
import paypalLogo from './logos/pypal.png';  // Path to PayPal logo
import dahabiaLogo from './logos/dahabia.jpeg'; // Path to Dahabia logo

const PaymentChoice = () => {
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };
  const Login = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  return (

    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
        Choose a Payment Method
      </Typography>

      {/* Payment Options - Display the cards */}
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <PaymentOption
          name="CCP"
          logo={ccpLogo}
          onClick={() => handlePaymentSelection("CCP")}
        />
        <PaymentOption
          name="Visa"
          logo={visaLogo}
          onClick={() => handlePaymentSelection("Visa")}
        />
        <PaymentOption
          name="PayPal"
          logo={paypalLogo}
          onClick={() => handlePaymentSelection("PayPal")}
        />
        <PaymentOption
          name="Dahabia"
          logo={dahabiaLogo}
          onClick={() => handlePaymentSelection("Dahabia")}
        />
      </Box>

      {/* Selected Payment Feedback */}
      {selectedPayment && (
        <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
          You have selected: {selectedPayment}
        </Typography>
      )}
        <Button
              onClick={Login}
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
            >
              لديك حساب؟ سجل الدخول
            </Button>
    </Box>
  );
};
export default PaymentChoice;