interface ErrorMessageProps {
  message: string
}

const ErrorMessage = (props: ErrorMessageProps) => {

  return (
    <div className="text-center py-10">
      <p className="text-xl font-semibold text-red-500">{props.message}</p>
    </div>
  );
}

export default ErrorMessage;