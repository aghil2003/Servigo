"use client";
import { useState,useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts";
import { StarIcon } from "lucide-react";
import AxiosInstance from "@/axios/axiosInstance";

export function ReviewsContainer() {

  const [userReview, setReview] = useState<any[]>([]); 

  const getreview = async () => {
    try {
      const response = await AxiosInstance.get("/review");
      console.log("API response:", response.data.review);
      setReview(response.data.review);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReview([]); 
    }
  };

  useEffect(() => {
    getreview();
  }, []);


  const renderStar = (filled: boolean) => (
    <StarIcon
      className={`h-4 w-4 ${filled ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
    />
  );
  
  
  const renderStarRating = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => renderStar(star <= rating))}
      </div>
    );
  };

  const reviewData = [
    { name: "Excellent", value: 65, color: "hsl(var(--chart-1))" },
    { name: "Good", value: 55, color: "hsl(var(--chart-2))" },
    { name: "Average", value: 7, color: "hsl(var(--chart-3))" },
    { name: "Poor", value: 7, color: "hsl(var(--chart-4))" },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Customer Satisfaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={reviewData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {reviewData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {userReview.map((review) => (
              <div key={review.id} className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.customer} />
                  <AvatarFallback>{review.initials}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{review.customer}</h4>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  {renderStarRating(review.rating)}
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}