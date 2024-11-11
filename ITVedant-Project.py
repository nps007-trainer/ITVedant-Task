import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import xlrd

# Load the dataset (assuming the dataset is stored as "SampleSuperstore.csv")
df = pd.read_excel('Sample - Superstore.xls')


print(df.head())

df.info()
df.describe()
df.isnull().sum()  # Check for missing values

# Group by Category and summarize sales and profit
category_summary = df.groupby('Category')[['Sales', 'Profit']].sum().reset_index()

print(category_summary)

## hue='Category': This specifies that the color encoding should be based on the Category
# Plot the sales and profit by category
plt.figure(figsize=(12, 6))
sns.barplot(x='Category', y='Sales',hue='Category', data=category_summary, palette='viridis',legend=False)
plt.title('Total Sales by Category')
plt.xlabel('Category')
plt.ylabel('Sales')
plt.show()


plt.figure(figsize=(12, 6))
sns.barplot(x='Category', y='Profit',hue='Category', data=category_summary, palette='magma',legend=False)
plt.title('Total Profit by Category')
plt.xlabel('Category')
plt.ylabel('Profit')
plt.show()

## Discount Impact on Sales and Profit:
plt.figure(figsize=(12, 6))
sns.boxplot(x='Discount', y='Sales', hue='Discount', data=df, palette='coolwarm',legend=False)
plt.title('Discount Impact on Sales')
plt.xlabel('Discount')
plt.ylabel('Sales')
plt.show()

plt.figure(figsize=(12, 6))
sns.boxplot(x='Discount', y='Profit', data=df, hue='Discount' ,palette='coolwarm',legend=False)
plt.title('Discount Impact on Profit')
plt.xlabel('Discount')
plt.ylabel('Profit')
plt.show()

## Region-wise Sales and Profit:

region_summary = df.groupby('Region')[['Sales', 'Profit']].sum().reset_index()

plt.figure(figsize=(12, 6))
sns.barplot(x='Region', y='Sales', hue='Region', data=region_summary, palette='muted',legend=False)
plt.title('Total Sales by Region')
plt.xlabel('Region')
plt.ylabel('Sales')
plt.show()

plt.figure(figsize=(12, 6))
sns.barplot(x='Region', y='Profit', hue='Region',data=region_summary, palette='muted',legend=False)
plt.title('Total Profit by Region')
plt.xlabel('Region')
plt.ylabel('Profit')
plt.show()


