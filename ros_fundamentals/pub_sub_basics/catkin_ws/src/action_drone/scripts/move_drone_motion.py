# #!/usr/bin/env python
# import time
# # import math
# import rospy
# from geometry_msgs.msg import Twist
# from std_msgs.msg import Empty

# class MoveDrone():

#     def __init__(self):
#         self.drone_vel_publisher = rospy.Publisher('/cmd_vel', Twist, queue_size=1)
#         self.takeoff = rospy.Publisher('/drone/takeoff', Empty, queue_size=1) 
#         self.land = rospy.Publisher('/drone/land', Empty, queue_size=1)
#         self.ctrl_c = False
#         rospy.on_shutdown(self.shutdownhook)
#         self.rate = rospy.Rate(1) # 1hz



#     def publish_once_in_motion_vel(self, cmd):
#         """
#         This is because publishing in topics sometimes fails teh first time you publish.
#         In continuos publishing systems there is no big deal but in systems that publish only
#         once it IS very important.
#         """
#         while not self.ctrl_c:
#             connections = self.drone_vel_publisher.get_num_connections()
#             if connections > 0:
#                 self.drone_vel_publisher.publish(cmd)
#                 rospy.loginfo("Cmd Published")
#                 break
#             else:
#                 self.rate.sleep()
#     def publish_once_in_takeoff(self, cmd):
#         """
#         This is because publishing in topics sometimes fails teh first time you publish.
#         In continuos publishing systems there is no big deal but in systems that publish only
#         once it IS very important.
#         """
#         while not self.ctrl_c:
#             connections = self.takeoff.get_num_connections()
#             if connections > 0:
#                 self.takeoff.publish(cmd)
#                 rospy.loginfo(" take off Published ")
#                 break
#             else:
#                 self.rate.sleep()
#     def publish_once_land_drone(self,cmd):
#         while not self.ctrl_c:
#             connections = self.land.get_num_connections()
#             if connections > 0:
#                 self.land.publish(cmd)
#                 rospy.loginfo(" land off cmd Published ")
#                 break
#             else:
#                 self.rate.sleep()


#     def shutdownhook(self):
#             # works better than the rospy.is_shut_down()
#             self.land_drone()
#             self.ctrl_c = True

#     def take_off(self):
#         rospy.loginfo("take off and fly robot")
#         takeoff_msg = Empty()
#         self.publish_once_in_takeoff(takeoff_msg)

#     def land_drone(self):
#         rospy.loginfo("shutdown time! Stop the robot")
#         land_msg = Empty()
#         self.publish_once_land_drone(land_msg)

#     def stop_drone_in_air(self):
#         move_msg = Twist()
#         move_msg.linear.x = 0
#         move_msg.angular.z = 0
#         rospy.loginfo("stopping")
#         self.publish_once_in_motion_vel(move_msg)

#     def move_drone_forward(self, moving_time):
#         move_msg = Twist()
#         move_msg.linear.x = 1
#         move_msg.angular.z = 1

#         rospy.loginfo("Moving Forwards")

#         self.publish_once_in_motion_vel(move_msg)
#         time.sleep(moving_time)
#         self.stop_drone_in_air()
#         rospy.loginfo("######## Finished Moving Forwards")

   

   


# if __name__ == '__main__':
#     rospy.init_node('move_bb8_test', anonymous=True)
#     movebb8_object = MoveBB8()
#     try:
#         movebb8_object.move_square(side=0.6)
#     except rospy.ROSInterruptException:
#         pass