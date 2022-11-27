interface ConsoleResultProps {
  result: string;
}

export const ConsoleResult = ({ result }: ConsoleResultProps) => (
  <div>
    <pre style={{ backgroundColor: "#000000d1", padding: "4px" }}>
      <code style={{ color: "white" }}>{result}</code>
    </pre>
  </div>
);
