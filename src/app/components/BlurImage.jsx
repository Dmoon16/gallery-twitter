'use client'

import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function BlurImage() {
    const [isLoading, setLoading] = useState(true)
    return (
        <a href="" className="group block">
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                    alt=""
                    src="https://bit.ly/placeholder-img"
                    fill={true}
                    className={cn(
                        'hover:opacity-75 object-cover',
                        isLoading
                            ? 'scale-110 blur-2xl grayscale'
                            : 'scale-100 blur-0 grayscale-0'
                    )}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
            <p className="mx-2 mt-4 text-sm text-gray-500">içerik bilgisi...</p>
        </a>
    )
}