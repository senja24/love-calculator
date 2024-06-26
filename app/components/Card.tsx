'use client';

import { Alert, Button, Card, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiInformationCircle } from "react-icons/hi";
import Pencet from './Pencet';

export default function LoveCalculator() {
    const [yourName, setYourName] = useState<string>('');
    const [theirName, setTheirName] = useState<string>('');
    const [score, setScore] = useState<number | null>(null);
    const [message, setMessage] = useState<string>('');

    const capitalizeWords = (str: string): string => {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    };

    const sleep = (ms: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const love = async (loveScore: number): Promise<void> => {
        for (let i = 0; i <= loveScore; i++) {
            setScore(i);
            await sleep(20);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!yourName || !theirName) {
            alert("You can't leave fields empty");
            return;
        }

        const loveScore = Math.floor(Math.random() * 100) + 1;
        love(loveScore);

        let loveMessage = '';
        if (loveScore <= 10) {
            loveMessage = `You and ${capitalizeWords(theirName)} love each other like Oil & Water. I'm sorry, but this is not enough for a perfect relationship.`;
        } else if (loveScore <= 20) {
            loveMessage = `You and ${capitalizeWords(theirName)} love each other like Bird & Sky. But need to put a little concentration on your love.`;
        } else if (loveScore <= 30) {
            loveMessage = `You and ${capitalizeWords(theirName)} love each other like Soil & Seed. You should take care of your love more!`;
        } else if (loveScore <= 40) {
            loveMessage = `You and ${capitalizeWords(theirName)} love each other like Romeo & Juliet. There is no fake thing in your love. Go ahead!`;
        } else if (loveScore <= 50) {
            loveMessage = `You and ${capitalizeWords(theirName)} love each other like Marie & Pierre Curie. That's a good combination. You are a good example of true love.`;
        } else if (loveScore <= 60) {
            loveMessage = `You and ${capitalizeWords(theirName)} love each other like The Earth & The Moon. You cannot live without each other.`;
        } else if (loveScore <= 70) {
            loveMessage = `You and ${capitalizeWords(theirName)} love each other like River & Sea. Spread Love, not Hate.`;
        } else if (loveScore <= 80) {
            loveMessage = `You and ${capitalizeWords(theirName)} love each other like glue. Nothing can separate you from each other. Love is forever.`;
        } else if (loveScore <= 90) {
            loveMessage = `You and ${capitalizeWords(theirName)} love each other more than anything in the world! You are the best example of true love.`;
        } else if (loveScore <= 100) {
            loveMessage = `You and ${capitalizeWords(theirName)} love each other like Ertuğrul Gazi & Halime Sultan. You should get married to ${capitalizeWords(theirName)} very soon. Best of luck!`;
        }

        setMessage(loveMessage);
    };

    return (
        <Card className="max-w-sm p-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                Love Calculator
            </h5>
            <form onSubmit={handleSubmit}>
                <div className="max-w-md mb-4">
                    <div className="mb-2 block">
                        <Label htmlFor="yourName" value="Your Name" />
                    </div>
                    <TextInput
                        id="yourName"
                        type="text"
                        icon={FaUser}
                        value={yourName}
                        onChange={(e) => setYourName(e.target.value)}
                        placeholder="gema"
                        required
                        className="mb-4"
                    />
                </div>
                <div className="max-w-md mb-4">
                    <div className="mb-2 block">
                        <Label htmlFor="theirName" value="Their Name" />
                    </div>
                    <TextInput
                        id="theirName"
                        type="text"
                        icon={FaUser}
                        value={theirName}
                        onChange={(e) => setTheirName(e.target.value)}
                        placeholder="marko"
                        required
                        className="mb-4"
                    />
                </div>
                <Button type="submit" className="w-full">
                    Check Your Love
                </Button>
            </form>
            {score !== null && (
                <div>
                    <Alert
                        color="success"
                        icon={HiInformationCircle}
                        onDismiss={() => alert('Alert dismissed!')}
                        rounded
                        additionalContent={
                            <div className="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">
                                {message}
                            </div>
                        }
                    >
                        <span className="font-medium">Result!</span> Your Love Score is {score}%
                    </Alert>
                </div>
            )}
            <Pencet />
        </Card>
    );
}
