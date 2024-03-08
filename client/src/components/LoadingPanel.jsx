import blockwave from "../assets/blockwave.svg";

export default function LoadingPanel() {
  return (
    <div className="mx-auto h-full">
      <img src={blockwave} className="h-screen mx-auto" />
    </div>
  );
}
