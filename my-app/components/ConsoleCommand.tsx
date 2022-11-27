interface ConsoleCommandProps {
  command: string;
}

export const ConsoleCommand = ({ command }: ConsoleCommandProps) => (
  <div>
    <pre style={{ backgroundColor: "#000000d1", padding: "4px" }}>
      <code style={{ color: "white" }}>{command}</code>
    </pre>
  </div>
);
