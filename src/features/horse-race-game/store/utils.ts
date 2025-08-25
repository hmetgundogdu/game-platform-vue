
export function sample<T>(arr: T[], k: number): T[] {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy.slice(0, k)
}

export function randomColors(n: number): string[] {
    if (n <= 0) return [];
    return Array.from({ length: n }, () => {
        const hue = Math.floor(Math.random() * 360);   // 0–359
        const sat = 60 + Math.random() * 30;           // %60–%90 arası
        const light = 40 + Math.random() * 20;         // %40–%60 arası
        return `hsl(${hue}, ${sat}%, ${light}%)`;
    });
}

export function simulateFinishTime(distance: number, condition: number): number {
    const baseSpeed = 16;
    const condBoost = 0.80 + (condition / 100) * 0.40;
    const randomJitter = 0.92 + Math.random() * 0.18;
    const speed = baseSpeed * condBoost * randomJitter;
    const timeSeconds = distance / speed;

    return Math.round(timeSeconds * 1000)
}