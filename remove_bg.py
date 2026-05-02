import os
from rembg import remove
from PIL import Image

def process_images():
    input_dir = 'Product Images'
    output_dir = 'Product Images/Processed'
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.jpeg', '.jpg', '.png')) and not os.path.isdir(os.path.join(input_dir, filename)):
            print(f"Processing {filename}...")
            input_path = os.path.join(input_dir, filename)
            output_filename = os.path.splitext(filename)[0] + '.png'
            output_path = os.path.join(output_dir, output_filename)
            
            # Avoid re-processing
            if os.path.exists(output_path):
                print(f"Skipping {filename}, already processed.")
                continue

            try:
                input_image = Image.open(input_path)
                output_image = remove(input_image)
                output_image.save(output_path)
                print(f"Saved to {output_path}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == '__main__':
    process_images()
