export function withPrefix<
    T extends Record<string, string>,
    P extends string
>(prefix: P, obj: T) {
    return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, `${prefix}/${v}` as const])
    ) as { [K in keyof T]: `${P}/${T[K]}` };
}