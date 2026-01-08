interface ButtonProps {
  text?: string;
}

function Button({ text = "Comprar" }: ButtonProps) {
  return (
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-400 transition-colors cursor-pointer">
      {text}
    </button>
  );
}

export default Button;
