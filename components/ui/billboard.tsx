import React from 'react';
import { Billboard } from "@/types";

interface BillboardProps {
    data: Billboard
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    const labelStyle = {
        fontFamily: "'Walter Turncoat', cursive",
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=swap');`}
            </style>
            <div 
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div
                        className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs"
                        style={labelStyle}
                    >
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billboard;
