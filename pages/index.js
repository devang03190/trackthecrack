import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TrackTheCrack</title>
        <meta name="description" content="Report road issues like potholes, diversions, traffic, and more." />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>🚧 TrackTheCrack</h1>
        <p>Report road issues and share with others to spread awareness. Help make Indian roads safer.</p>
        
        <ul>
          <li>🕳️ Pothole</li>
          <li>🚧 Diversion</li>
          <li>🌊 Flooded Road</li>
          <li>🚗 Traffic Jam</li>
          <li>🐄 Cow Sitting on Road</li>
        </ul>

        <button 
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#25D366',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
          onClick={() => {
            const text = encodeURIComponent("Check this out 🚨 - Report road hazards with TrackTheCrack: https://trackthecrack.vercel.app");
            window.open(`https://wa.me/?text=${text}`, '_blank');
          }}
        >
          📤 Share on WhatsApp
        </button>
      </main>
    </div>
  );
}
