#! /usr/bin/env python
import rospy

from geometry_msgs.msg import Twist
# from geometry_msgs.msg import Vector3

rospy.init_node('move_robot')
pub = rospy.Publisher('/cmd_vel',Twist , queue_size=1)
rate = rospy.Rate(5)
vel = Twist()
def move_forward(speed_):
    x_component = vel.linear
    x_component.x = speed_
def turn_z(speed_):
    angular_component = vel.linear
    angular_component.z = speed_


while not rospy.is_shutdown(): 
  
    pub.publish(vel)
    move_forward(0.3)
    rate.sleep()
    turn_z(0.4)
    rate.sleep()