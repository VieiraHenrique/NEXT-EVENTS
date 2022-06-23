import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FourOFourPage() {
    const [counter, setCounter] = useState(5);
    const router = useRouter();

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);
        } else {
            router.push("/");
        }
    }, [counter, router]);

    return (
        <div className="FourOFour">
            <h1>404</h1>
            <h2>Oups... Nothing to see here</h2>
            <p>You will be redirected to the homepage in {counter} seconds</p>
        </div>
    );
}
