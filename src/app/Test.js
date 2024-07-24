"use client";

import { useState } from "react";

export default function Test() {
    const [frameSrc, setFrameSrc] = useState("/test.html");
    return (
        <div>
            <iframe title="Frame Content" src={frameSrc} className=""></iframe>
        </div>
    );
}
