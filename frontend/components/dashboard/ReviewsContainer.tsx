"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts";
import { StarIcon } from "lucide-react";

// Sample data for the pie chart
const reviewData = [
  { name: "Excellent", value: 65, color: "hsl(var(--chart-1))" },
  { name: "Good", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Average", value: 7, color: "hsl(var(--chart-4))" },
  { name: "Poor", value: 3, color: "hsl(var(--chart-5))" },
];

// Sample recent reviews
const recentReviews = [
  {
    id: 1,
    customer: "Sarah Johnson",
    avatar: "",
    initials: "SJ",
    rating: 5,
    comment: "The technician was very professional and fixed our AC in record time!",
    date: "2 days ago",
  },
  {
    id: 2,
    customer: "Michael Brown",
    avatar: "",
    initials: "MB",
    rating: 4,
    comment: "Good service overall, but arrived a bit later than scheduled.",
    date: "1 week ago",
  },
  {
    id: 3,
    customer: "Emily Davis",
    avatar: "",
    initials: "ED",
    rating: 5,
    comment: "Excellent work on our plumbing issue. Will definitely use again!",
    date: "1 week ago",
  },
];

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

export function ReviewsContainer() {
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
            {recentReviews.map((review) => (
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