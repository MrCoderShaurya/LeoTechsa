from PIL import Image
from pathlib import Path

SRC_DIR = Path(__file__).parent.parent / 'assets' / 'images'
SIZES = [400, 800, 1200]
QUALITY = 86

print('Converting images in', SRC_DIR)
if not SRC_DIR.exists():
    print('Source dir does not exist:', SRC_DIR)
    raise SystemExit(1)

for p in SRC_DIR.iterdir():
    if not p.is_file():
        continue
    ext = p.suffix.lower()
    if ext not in ('.png', '.jpg', '.jpeg'):
        print('Skipping non-raster file:', p.name)
        continue
    try:
        im = Image.open(p)
        # ensure RGB for webp
        if im.mode in ('RGBA', 'LA'):
            background = Image.new('RGB', im.size, (255,255,255))
            background.paste(im, mask=im.split()[3])
            im_rgb = background
        else:
            im_rgb = im.convert('RGB')

        # Save full-size webp
        out_full = p.with_suffix('.webp')
        im_rgb.save(out_full, 'WEBP', quality=QUALITY, method=6)
        print('Saved', out_full.name)

        # Save scaled variants
        for w in SIZES:
            # skip if original already smaller than target
            if im.width <= w:
                continue
            ratio = w / float(im.width)
            new_h = int(im.height * ratio)
            im_resized = im_rgb.resize((w, new_h), Image.LANCZOS)
            out_file = p.with_name(p.stem + f'-{w}.webp')
            im_resized.save(out_file, 'WEBP', quality=QUALITY, method=6)
            print('Saved', out_file.name)

    except Exception as e:
        print('Error processing', p.name, e)

print('Done')
