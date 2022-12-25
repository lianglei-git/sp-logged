import log from 'shared/cout.log';

async function cout() {
    await log(" 👋", { time: 100 });

    await log(" Hello Stream.", { time: 200 });

    await log(" Let's get started.", { time: 300 });
    
    await log(" The frist of all,", { every: true, time: 100 })

    await log(" Let's think ablout it", { every: true, time: 100 });

    await log(" 🤔", { isStdout: true, time: 100 });

    await log("\n ... \n", { every: true, time: 300 });

    await log(" I think the following functions should be implemented\n", { every: true, time: 50 });

    await log("  - Data stream output to file format; \n", { every: true, time: 50 });

    await log("  - Support file restrictions and record; \n", { every: true, time: 50 });

    await log("  - Changes in monitoring documents; \n", { every: true, time: 50 });

    await log("  - Support output of different color conversion streams; \n", { every: true, time: 50 });
    
    await log("  - Support read file; \n", { every: true, time: 50 });
    
}

cout();





