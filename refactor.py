import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract <style>
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if style_match:
    with open('src/style.css', 'w', encoding='utf-8') as f:
        f.write(style_match.group(1))
    content = content.replace(style_match.group(0), '<link rel="stylesheet" href="/src/style.css">')

# Extract <script>
script_match = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
if script_match:
    content = content.replace(script_match.group(0), '<script type="module" src="/src/main.js"></script>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Extraction complete")
