import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    const initialPrompt = "You are a professional specialized in helping with programming. Provide brief and useful answers.";
    
    const fullPrompt = `${initialPrompt}\nUsuario: ${message}\nBot:`;

    const response = await fetch('https://api.cohere.ai/generate', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: fullPrompt,
        model: 'command',
        temperature: 0.7,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: [],
        return_likelihoods: 'NONE'
      }),
    });

    const data = await response.json();

    if (!data || !data.text) {
      console.error('Respuesta inválida de Cohere');
      return NextResponse.json({ error: 'Respuesta inválida de Cohere' }, { status: 500 });
    }

    const aiResponse = data.text.trim();
    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('Error al conectar con Cohere:', error);
    return NextResponse.json({ error: 'Error al conectar con Cohere' }, { status: 500 });
  }
}
