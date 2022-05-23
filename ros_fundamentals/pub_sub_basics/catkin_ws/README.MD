# to see info on a topic
```
rostopic info /cmd_vel
```
# creta pacjage
```
catkin_create_pkg beginner_tutorials std_msgs rospy roscpp
```

# to see message detail
```
rosmsg show geometry_msgs/Twist
```

# to launch a launch file
```
 roslaunch my_examples_pk move_robot.launch
```
# to allow a file to be executable
```
chmod +x move_robot_publisher.py
```
# to see packages from catkin ws
```
source devel/setup.bash
```

# to view data transferred over a topic
```
rostopic echo /counter
```
# View available services
```
rosservice list
rosservice info /name_of_your_service
```

# to create custom msg
```
mkdir msg

```
## edit the cmakelists.txt file

```
find_package(catkin REQUIRED COMPONENTS
       rospy
       std_msgs
       message_generation   # Add message_generation here, after the other packages
)
add_message_files(
      FILES
      Age.msg
    ) # Dont Forget to UNCOMENT the parenthesis and add_message_files TOO


generate_messages(
      DEPENDENCIES
      std_msgs
) # Dont Forget to uncoment here TOO
```

## Modify the package.xml files
```
<build_depend>message_generation</build_depend> 
<build_export_depend>message_runtime</build_export_depend>
<exec_depend>message_runtime</exec_depend>
```

# start action gui
```
rosrun actionlib_tools axclient.py /ardrone_action_server
```
# tools
```
rqt_console: http://wiki.ros.org/rqt_console

rqt_plot: http://wiki.ros.org/rqt_plot

rqt_graph: http://wiki.ros.org/rqt_graph

Rosbag: http://wiki.ros.org/rosbag

Rviz: http://wiki.ros.org/rviz
```