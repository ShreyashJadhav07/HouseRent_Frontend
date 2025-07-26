"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { api, ENDPOINT } from "@/lib/api";
import { FolderLock, Bell, BellRing, Clock, Loader2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function NotificationPage() {
  const userData = useSelector((state) => state.user);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const res = await api.get(ENDPOINT.getNotifications);
      setNotifications(res.data.notifications || []);
    } catch (err) {
      console.error("Error fetching notifications:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userData.isLoggedIn) {
      fetchNotifications();
    } else {
      setLoading(false);
    }
  }, [userData.isLoggedIn]);

  if (!userData.isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="w-full max-w-7xl mx-auto px-4 pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <FolderLock className="w-20 h-20 mx-auto mb-6 text-slate-400" strokeWidth={1.2} />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Login Required</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto text-lg">
              You need to be logged in to view your notifications. Please sign in to stay updated.
            </p>
            <Link 
              href="/login"
              className={cn(buttonVariants(), "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors")}
            >
              Login
            </Link>
          </div>
        </section>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 pt-24 pb-8">
          <div className="flex flex-col items-center justify-center h-[50vh]">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
            <p className="text-slate-600 font-medium">Loading notifications...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
      
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
          </div>
          <p className="text-slate-600">Stay updated with your latest activities and updates</p>
        </div>

      
        {notifications.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <BellRing className="w-12 h-12 text-slate-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No notifications yet</h3>
              <p className="text-slate-500 max-w-sm mx-auto">
                When you have new notifications, they'll appear here to keep you informed.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((noti, idx) => (
              <Card 
                key={idx} 
                className="group hover:shadow-lg transition-all duration-200 border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Bell className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-900 font-medium leading-relaxed mb-3">
                        {noti.message}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        <time dateTime={noti.createdAt}>
                          {new Date(noti.createdAt).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </time>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

       
        {notifications.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              You have {notifications.length} notification{notifications.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
