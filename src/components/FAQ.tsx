'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is the purpose of CPR?",
        answer: "The purpose of CPR (cardiopulmonary resuscitation) is to keep blood and oxygen moving around the body when the heart has stopped beating. When someone is in cardiac arrest, their heart is no longer pumping blood. By pushing hard and fast on the chest, CPR manually pumps blood to vital organs especially the brain helping to keep them alive until the heart can be restarted with a defibrillator or emergency medical care arrives."
    },
    {
        question: "Is compression-only CPR adequate to save a life?",
        answer: "Yes. Compression-only CPR can be very effective in the first few minutes of a witnessed cardiac arrest. Chest compressions help circulate the oxygen that is already in the blood, especially to the brain and heart. If you are unable or unwilling to give rescue breaths, doing continuous chest compressions is far better than doing nothing. Rescue breaths should be added as soon as a barrier device is available or trained help arrives."
    },
    {
        question: "When someone is in cardiac arrest are they dead?",
        answer: "A person in cardiac arrest is unresponsive and not breathing because their heart has stopped. Without help, they will not survive. This means you cannot harm them by starting CPR or using a defibrillator, but you can save their life. Fear of \"doing something wrong\" should never stop you from acting."
    },
    {
        question: "How long after cardiac arrest does brain damage begin?",
        answer: "Brain damage can begin within 4 minutes of cardiac arrest. Every minute without CPR or defibrillation greatly increases the risk of permanent brain injury, which is why immediate action is critical."
    },
    {
        question: "Can anybody use a defibrillator (AED)?",
        answer: "Yes. Anyone can use an AED. Defibrillators are designed to be used by members of the public with no medical training. They are safe, automated devices that give clear voice and visual instructions. You simply turn the AED on and follow the prompts. The device will only deliver a shock if it is needed, so you cannot accidentally harm the person. Training is helpful, but you do not need it to use an AED and save a life."
    },
    {
        question: "What is agonal breathing?",
        answer: "Agonal breathing is abnormal, distressed breathing that can occur during cardiac arrest. It may look like gasping, snorting, or irregular breaths and can sometimes be mistaken for a seizure. This is not normal breathing and does not mean the person is alive or recovering. If someone is unresponsive and has agonal breathing, they are in cardiac arrest and CPR should be started immediately."
    },
    {
        question: "What if I give CPR to someone who isn't in cardiac arrest — can I harm them?",
        answer: "Serious harm is very unlikely. If someone is unresponsive and not breathing normally, it is safer to start CPR than to do nothing. If the person is not in cardiac arrest, they will usually show signs of life or respond, and CPR can be stopped. First aid guidelines advise that if you are unsure, you should err on the side of caution and start CPR, acting quickly may save a life."
    },
    {
        question: "Will CPR alone save a person's life after cardiac arrest?",
        answer: "CPR alone usually does not restart the heart. CPR keeps blood flowing and buys time, but most people in cardiac arrest need a defibrillator to restart the heart. The sooner CPR is started and a defibrillator is used, the better the chance of survival."
    },
    {
        question: "How much time do you have to save a life after cardiac arrest?",
        answer: "Time is critical. The best chance of survival comes when CPR is started immediately and a defibrillator is used within the first 3–5 minutes of cardiac arrest. Every minute without CPR and defibrillation greatly reduces the chance of survival, which is why acting quickly is so important."
    },
    {
        question: "What is a defibrillator?",
        answer: "A defibrillator (AED) is a device that checks the heart's rhythm and can deliver an electric shock if the heart is in a dangerous rhythm called ventricular fibrillation. The shock stops the heart briefly, giving it a chance to restart with a normal rhythm. Sometimes it takes more than one shock, and the pads should stay on the person even if they recover, because the heart can go back into cardiac arrest."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-8 sm:mb-10 text-[#66bb6a] text-center">
                    Frequently Asked <span className="text-[#4db6ac]">Questions</span>
                </h2>

                <div className="space-y-4 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#66bb6a] transition-colors duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 text-2xl text-[#66bb6a] font-bold">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? 'max-h-[1000px] opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-5 sm:p-6 pt-0 bg-gray-50">
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
