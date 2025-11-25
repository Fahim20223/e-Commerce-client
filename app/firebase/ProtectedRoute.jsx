// app/components/ProtectedRoute.js
// import { useAuth } from "../lib/firebase";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    router.push("/pages/login"); // Redirect to login if user is not authenticated
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
