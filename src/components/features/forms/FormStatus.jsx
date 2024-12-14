export default function FormStatus({ formStatus }) {
  const { status = false, message = 'Something is wrong' } = formStatus;
  return (
    <h2
      className={`text-center mx-auto pb-6 ${
        status ? 'text-green-500' : 'text-red-600'
      }`}
    >
      {message}
    </h2>
  );
}
