
async function cout() {
    const log = await import('stream/private/cout.log').then(r => r?.default).catch(() => console.log);

    await log(" 👋", { time: 100 });

    await log(" Hello Logged.", { time: 200 });

    await log(" Next?", { time: 200 });

    await log("  - Real time response to client through monitoring file changes", { time: 100 });
}

cout();