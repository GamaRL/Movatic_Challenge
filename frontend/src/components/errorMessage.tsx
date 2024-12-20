interface ErrorMessageProps {
  message: string
}

/**
 * A component that helps to show an error message
 * in red color.
 */
const ErrorMessage = (props: ErrorMessageProps) => {

  const {message} = props;

  return (
    <div className="text-center py-10">
      <p className="text-xl font-semibold text-red-500">{message}</p>
    </div>
  );
}

export default ErrorMessage;