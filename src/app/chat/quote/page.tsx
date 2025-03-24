"use client"

import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";
import Button from "@/components/Button";
import Input from "@/components/Input";

const questions = [
    "Qual é o seu nome?",
    "Qual é o seu email?",
    "Qual é o seu telefone?",
    "Qual tipo de sistema você precisa?",
    "Qual é o seu orçamento estimado?",
    "Tem alguma observação adicional?",
];

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<{ text: string; sender: "bot" | "user" }[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [responses, setResponses] = useState<string[]>([]);
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMessages([{ text: questions[currentQuestion], sender: "bot" }]);
        }, 500);
    }, []);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage = { text: inputValue, sender: "user" };
        setMessages((prev): { text: string; sender: "bot" | "user"; }[] => [...prev, userMessage]);
        setResponses((prev) => [...prev, inputValue]);
        setInputValue("");

        setTimeout(() => {
            const nextQuestionIndex = currentQuestion + 1;
            if (nextQuestionIndex < questions.length) {
                setMessages((prev) => [...prev, { text: questions[nextQuestionIndex], sender: "bot" }]);
                setCurrentQuestion(nextQuestionIndex);
            } else {
                sendToAPI();
            }
        }, 2000);
    };

    const sendToAPI = async () => {
        setIsSending(true);
        const data = {
            nome: responses[0],
            email: responses[1],
            telefone: responses[2],
            tipoSistema: responses[3],
            orcamento: responses[4],
            observacao: responses[5] || "",
        };

        try {
            const response = await fetch("https://api.exemplo.com/orcamentos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setMessages((prev) => [...prev, { text: "Obrigado! Seu orçamento foi enviado com sucesso. 🚀", sender: "bot" }]);
            } else {
                setMessages((prev) => [...prev, { text: "Ocorreu um erro ao enviar o orçamento. Tente novamente!", sender: "bot" }]);
            }
        } catch (error) {
            setMessages((prev) => [...prev, { text: "Erro ao conectar com o servidor. Verifique sua conexão.", sender: "bot" }]);
            console.error(error)
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="flex flex-col w-full mx-auto min-h-screen bg-gray-100">
            <div className="bg-red-500 text-white py-3 px-4 text-lg font-bold flex items-center">
                Bot - Natália
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3  max-w-7xl mx-auto w-full">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-3 max-w-xs ${msg.sender === "bot" ? "bg-gray-300 text-gray-900 self-start rounded-bl-lg rounded-r-lg" : "bg-red-500 text-white self-end ml-auto rounded-l-lg rounded-tr-lg"}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="p-4 flex items-center gap-2 bg-white border-t">
                <Input
                    type="text"
                    placeholder="Digite sua resposta..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isSending}
                />
                <Button onClick={handleSendMessage} disabled={isSending || !inputValue.trim()}>
                    <Send className="w-5 h-5" />
                </Button>
            </div>
        </div>
    );
};

export default Chat;
