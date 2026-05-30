import { Metadata } from "next";
import GeneralClient from "./_components/GeneralClient";

export const metadata: Metadata = {
  title: "General Trivia Campaign | QuizMaster Pro",
  description: "Challenge your intelligence across multiple subject categories and climb your levels.",
};

export default function GeneralPage() {
  return <GeneralClient />;
}
