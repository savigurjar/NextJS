"use client";
import { UserButton } from "@clerk/nextjs";

interface Props {
  showname?: boolean;
}
export default function UserControl({ showname }: Props) {
  return <UserButton showName={showname} />;
}
