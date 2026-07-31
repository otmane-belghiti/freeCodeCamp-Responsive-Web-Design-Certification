import turtle as tu
from PIL import Image

img = Image.open("Image")
tu.Screen().bgcolor('black')
tu.pencolor('white')
tu.speed(0)
start_pos = -img.size[0]/2, img.size[1]/2

def point(x, y):
    if tu.pos()[1]==y+1:
        tu.goto(x, y)
    else:
        tu.penup()
        tu.goto(x, y)
        tu.pendown()

img.convert('RGB')
coords = 0, 0
for i in range(img.size[0]):
    for j in range(img.size[1]):
        coords =i, j
        if img.getpixel(coords)[0] < 100 \
                and img.getpixel(coords)[1] < 100 \
                and img.getpixel(coords)[2] < 100 :
            point(start_pos[0] + i, start_pos[1] - j)

tu.done()