import { Toaster } from "react-hot-toast";
import { PiShoppingCartFill, PiWarningCircleFill } from "react-icons/pi";

function ToasterConfig() {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 4000,
          icon: <PiShoppingCartFill color="#5FB5AC" fontSize={"24px"} />,
        },
        error: {
          duration: 4000,
          icon: (
            <PiWarningCircleFill fontSize={"24px"} className="text-amber-500" />
          ),
        },
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "#fff",
          color: "#22343D",
          borderRadius: "20px",
        },
      }}
    />
  );
}

export default ToasterConfig;
