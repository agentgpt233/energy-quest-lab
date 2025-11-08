import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle Google OAuth callback
    const handleCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        const error = params.get('error');

        if (error) {
          console.error('Google auth error:', error);
          navigate('/?error=auth_failed');
          return;
        }

        if (code) {
          // Process authentication code here
          // This will be implemented when authentication is set up
          console.log('Google auth code received:', code);
          navigate('/');
        } else {
          navigate('/?error=no_code');
        }
      } catch (err) {
        console.error('Callback error:', err);
        navigate('/?error=callback_failed');
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
        <h2 className="text-xl font-semibold text-foreground">
          Авторизация через Google...
        </h2>
        <p className="text-muted-foreground">
          Пожалуйста, подождите
        </p>
      </div>
    </div>
  );
};

export default GoogleCallback;
