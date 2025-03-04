import { useState, ChangeEvent, FormEvent } from 'react';

// Define the error type for better type safety
interface FormError extends Error {
  message: string;
}

export default function Form() {
  const [answer, setAnswer] = useState<string>('');
  const [error, setError] = useState<FormError | null>(null);
  const [status, setStatus] = useState<'typing' | 'submitting' | 'success'>('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err as FormError);
    }
  }

  function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button
          disabled={
            answer.length === 0 ||
            status === 'submitting'
          }
        >
          Submit
        </button>
        {error !== null && (
          <p className="Error">
            {error.message}
          </p>
        )}
      </form>
    </>
  );
}

function submitForm(answer: string): Promise<void> {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldError: boolean = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}