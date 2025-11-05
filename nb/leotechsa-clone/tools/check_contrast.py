from math import pow

# Colors to check (hex)
colors = {
    'bg': '#f7fafc',
    'surface': '#ffffff',
    'primary': '#0b3d91',
    'accent': '#007a5f',
    'muted': '#64748b',
    'heading': '#0f1724'
}

def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2],16) for i in (0,2,4))

def srgb_to_linear(c):
    c = c/255.0
    return c/12.92 if c<=0.03928 else pow((c+0.055)/1.055,2.4)

def luminance(hexcol):
    r,g,b = hex_to_rgb(hexcol)
    R = srgb_to_linear(r)
    G = srgb_to_linear(g)
    B = srgb_to_linear(b)
    return 0.2126*R + 0.7152*G + 0.0722*B

def contrast_ratio(a,b):
    La = luminance(a)
    Lb = luminance(b)
    L1 = max(La,Lb)
    L2 = min(La,Lb)
    return (L1+0.05)/(L2+0.05)

pairs = [
    ('heading','bg'),
    ('heading','surface'),
    ('muted','bg'),
    ('primary','surface'),
    ('accent','surface'),
    ('accent','bg'),
]

print('Contrast checks:')
for a,b in pairs:
    r = contrast_ratio(colors[a], colors[b])
    print(f"{a} ({colors[a]}) vs {b} ({colors[b]}): {r:.2f}: ", end='')
    ok = 'PASS' if r>=4.5 else ('AA large' if r>=3.0 else 'FAIL')
    print(ok)
