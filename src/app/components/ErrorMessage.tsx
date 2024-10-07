type ErrorMessageProps = {
  errorMessage: string | null;
};

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  if (!errorMessage) return null;

  return (
    <div className="py-4 text-red-600">
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};

export default ErrorMessage;
