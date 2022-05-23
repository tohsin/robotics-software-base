# creake catking and src folders first
## create package
CD to catkin_ws/src
```
$ catkin_create_pkg my_package rospy
->
$ catkin_create_pkg <package_name> <package_dependecies>
```
## To add the workspace to your ROS environment you need to source the generat
```
source devel/setup.bash
```

## go to package
```
roscd mackage_name
```

## launch a launch file
```
roslaunch my_package my_package_launch_file.launch
```