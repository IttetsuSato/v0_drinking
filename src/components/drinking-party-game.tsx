"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const players = ["プレイヤー1", "プレイヤー2", "プレイヤー3", "プレイヤー4"];

const challenges = [
  "一番恥ずかしい思い出を話す",
  "隣の人とポーズを決めて写真を撮る",
  "好きな人のタイプを詳しく説明する",
  "一番最後に連絡した異性は誰か答える",
  "携帯の中で一番恥ずかしい写真を見せる",
  "他の全員分のお酒を一気飲みする",
  "5分間ずっと笑顔でいる",
  "目をつぶって30秒間片足立ちする",
];

export default function DrinkingPartyGame() {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setSelectedPlayer(players[Math.floor(Math.random() * players.length)]);
      setSelectedChallenge(
        challenges[Math.floor(Math.random() * challenges.length)],
      );
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          飲み会ゲーム：真実かチャレンジ
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div
          className={`w-48 h-48 rounded-full border-8 border-primary flex items-center justify-center text-xl font-bold ${
            isSpinning ? "animate-spin" : ""
          }`}
        >
          {isSpinning ? "回転中..." : "回す"}
        </div>
        <Button onClick={spinWheel} disabled={isSpinning} className="mt-4">
          {isSpinning ? "選択中..." : "スピンする"}
        </Button>
        {selectedPlayer && selectedChallenge && !isSpinning && (
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">{selectedPlayer}の番です！</p>
            <p className="text-xl mt-2">{selectedChallenge}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
