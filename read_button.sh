# Start the server.mjs Node server in the background
node ~/Desktop/project/server.mjs &


# Monitors GPIO pin 4 for button presses. On new press, simulates an "h" key press.
last=0
while :
do
  raspi-gpio get 4 | grep level=1 > /dev/null ; ret=$?
  if [ $last$ret == 01 ]; then
    xdotool key h
  fi
  last=$ret
  sleep 0.1
done

