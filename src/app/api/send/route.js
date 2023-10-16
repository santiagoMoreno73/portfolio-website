import { NextResponse } from "next/server";

export async function POST(request, response){
    const { body } = await request.json();
    const { email, subject, message } = body; 

    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: ["sstimor2099@gmail.com", email],
            subject: subject,
            react: (
                <>
                    <h1>{ subject }</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted: </p>
                    <p>{ message }</p>
                </>
            ),
        });

        return NextResponse.json(data);
    }
    catch (error) {
        return NextResponse.json({ error });
    }
}