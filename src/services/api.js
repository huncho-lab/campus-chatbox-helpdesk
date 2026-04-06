export const askQuestion = async (question) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                answer: "The library closes at 9 PM.",
                category: "library",
            });
        }, 1000);
    });
};

export const getTrendingQuestions = async () => {
    return [
        { question: "Library hours?", count: 45 },
        { question: "How to pay fees?", count: 30 },
        { question: "Sports schedule?", count: 20 },
    ];
};

export const getCategoryStats = async () => {
    return [
        { category: "library", count: 120 },
        { category: "fees", count: 60 },
        { category: "sports", count: 40 },
    ];
};