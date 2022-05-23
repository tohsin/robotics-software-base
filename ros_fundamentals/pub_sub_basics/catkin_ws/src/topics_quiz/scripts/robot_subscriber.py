#! /usr/bin/env python

import rospy
from sensor_msgs.msg import LaserScan 
from geometry_msgs.msg import Twist

rospy.init_node('topics_quiz_node')
rate = rospy.Rate(2)
move_robot = Twist()
move_robot.linear.x = 0.5
move_robot.angular.z = 0

pub = rospy.Publisher('/cmd_vel',Twist , queue_size=1)


def callback(msg): 
    pub.publish(move_robot)
    if(msg.ranges[360] < 1):
        move_robot.linear.x = 0.0
        move_robot.angular.z = 0.5
    if(msg.ranges[719] < 1 and msg.ranges[400] == float('inf')):
        move_robot.linear.x = 0.5
        move_robot.angular.z = 0.0
    if(msg.ranges[10] == float('inf') and msg.ranges[719] == float('inf') and msg.ranges[400] == float('inf')):
        move_robot.linear.x = 0.0
        move_robot.angular.z = 0.0
        rospy.loginfo('I Stopped........!')

    # range_data = laserData.ranges
    # mid_idx = len(range_data)//2 # if 9 elemenrs will return 4
    # front_ptr = range_data[mid_idx]
    # right_ptr = range_data[len(range_data)-1]
   
    # vel = Twist()
    # vel.linear.x = 0.04
    # if front_ptr<0.5:
    #     print('distance to front is small so turn', front_ptr)
        
    #     vel.angular.z = 0.1
    # elif right_ptr>=0.2 and right_ptr<=0.3:
    #     print('is in perfect distance from wall so we keep moving',right_ptr)
    #     vel.linear.x = 0.1
    # elif right_ptr > 0.3:
    #     print('too far from wall')
    #     #rotate a bit and move forward
    #     vel.angular.z = -0.03
       
    # elif right_ptr < 0.2:
    #     print('too close to wall')
    #     vel.angular.z = 0.03
    #     # vel.linear.x = 0.05
    # pub.publish(vel)
    # rate.sleep()
    # print (laserData.data)




sub = rospy.Subscriber('/scan',  LaserScan, callback)

rospy.spin()

