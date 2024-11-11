**Dataset: Sample Superstore**

1. **Description of the Dataset**

The Sample Superstore dataset contains data about a retail store's sales performance, including:

•	Order ID: Unique identifier for each order.
•	Product Name: The name of the product sold.
•	Category: The product category (e.g., Furniture, Office Supplies, Technology).
•	Sub-Category: The subcategory of the product (e.g., Chairs, Phones, Binders).
•	Sales: The total sales amount.
•	Profit: The profit made from the sale.
•	Quantity: Number of items sold.
•	Discount: The discount applied to the product.
•	Region: Geographical region where the sale took place (e.g., East, West, Central).
•	Ship Mode: Shipping method used for the order (e.g., Standard Class, Second Class).
•	Customer Name: Name of the customer.
•	Order Date: Date when the order was placed.
•	Ship Date: Date when the order was shipped.
________________________________________

2. Dataset Citation
•	Source - The dataset is a sample dataset provided by Tableau.
•	Citation - Tableau Software, Inc. (2023). Sample Superstore Dataset. Available at: https://www.tableau.com/
________________________________________

2. **Data Analysis and Visualization in Python**

**Step 1: Import Required Libraries**

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import xlrd
```

**Step 2: Load the Dataset**

Download and load the Sample Superstore dataset into Python using pandas.
python

```python
# Load the dataset (assuming the dataset is stored as "SampleSuperstore.csv")
df = pd.read_csv('SampleSuperstore.csv')

# Display the first few rows of the dataset
df.head()
```

**Step 3: Exploratory Data Analysis (EDA)**

1.	**Data Overview**

Check the structure of the dataset.

```python
df.info()
df.describe()
df.isnull().sum()  # Check for missing values
```

2.	**Category-wise Sales and Profit:**

We will analyze the sales and profit by different categories.

```python
# Group by Category and summarize sales and profit
category_summary = df.groupby('Category')[['Sales', 'Profit']].sum().reset_index()

# Plot the sales and profit by category
plt.figure(figsize=(12, 6))
sns.barplot(x='Category', y='Sales', data=category_summary, palette='viridis')
plt.title('Total Sales by Category')
plt.xlabel('Category')
plt.ylabel('Sales')
plt.show()

plt.figure(figsize=(12, 6))
sns.barplot(x='Category', y='Profit', data=category_summary, palette='magma')
plt.title('Total Profit by Category')
plt.xlabel('Category')
plt.ylabel('Profit')
plt.show()
```

3.	**Profit vs. Sales:**
We can analyze the relationship between sales and profit using a scatter plot.

```python
plt.figure(figsize=(10, 6))
sns.scatterplot(x='Sales', y='Profit', data=df, color='blue')
plt.title('Sales vs Profit')
plt.xlabel('Sales')
plt.ylabel('Profit')
plt.show()
```

4.	**Discount Impact on Sales and Profit:**

Let's see how discounts are related to sales and profit.

```python
plt.figure(figsize=(12, 6))
sns.boxplot(x='Discount', y='Sales', data=df, palette='coolwarm')
plt.title('Discount Impact on Sales')
plt.xlabel('Discount')
plt.ylabel('Sales')
plt.show()

plt.figure(figsize=(12, 6))
sns.boxplot(x='Discount', y='Profit', data=df, palette='coolwarm')
plt.title('Discount Impact on Profit')
plt.xlabel('Discount')
plt.ylabel('Profit')
plt.show()
```

5.	**Region-wise Sales and Profit:**

Examine sales and profit by region.

```python

region_summary = df.groupby('Region')[['Sales', 'Profit']].sum().reset_index()

plt.figure(figsize=(12, 6))
sns.barplot(x='Region', y='Sales', data=region_summary, palette='muted')
plt.title('Total Sales by Region')
plt.xlabel('Region')
plt.ylabel('Sales')
plt.show()

plt.figure(figsize=(12, 6))
sns.barplot(x='Region', y='Profit', data=region_summary, palette='muted')
plt.title('Total Profit by Region')
plt.xlabel('Region')
plt.ylabel('Profit')
plt.show()
```

**Step 4: Insights**

From the above analysis, you might uncover several key insights:

•	Sales and Profit by Category: Technology might have the highest sales, but Furniture might have the highest profit margins.
•	Discounts Impact: Discounts might increase sales volume but can potentially reduce profit margins, which can be explored using box plots.
•	Region-wise Analysis: Certain regions might be more profitable than others, which can help target business strategies.

**Putting it all-together**

```python
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
```
________________________________________

3. Create a Dashboard in Tableau

**Step 1: Load the Data into Tableau**

•	Open Tableau and connect to the Sample Superstore dataset (use the CSV file you analyzed in Python).

**Step 2: Create Visualizations**
•	**Sales and Profit by Category (Bar Chart):**
o	Drag Category to Rows and Sales and Profit to Columns.
o	Sort data by Sales or Profit and use color to distinguish between the two.

•	**Customer Scatterplot**

1. **Setup:** Create a scatter plot with **Sales** on the **Columns** and **Profit** on the **Rows**. Uncheck **Aggregate Measures** in the **Analysis** menu to see the full scatterplot.

2. **Visualization:**  Drag the **Profit Ratio** to **Color** for enhanced visuals.
    
    - **Create a Calculated Field:**
        - Navigate to the Data pane, right-click, and select **Create Calculated Field**.
        - Name the field (e.g., **Profit Ratio**) and input the formula mentioned below.
        ```bash
        ([Profit] / [Sales]) * 100
        ```

3. **Adjust Color Scheme:** Change the color range from -0.5 to 0.5 for balance.
    - Click on **Shape** and select the **Circle** and then click on **Color** and select **Edit Colors**.
    - Click on **Advanced**, check the **Start** option and change the **Start** value to **-0.5**.

4. **Tooltip Customization:** Add **Customer Name** and **Region** to **Detail** for better context. Edit the Tooltip to emphasize the customer's name.

It helps declutter visualizations so that we can show necessary information when users hover over the visualization.

Click on Tooltip and modify it like so that the customer's name is emphasized, increase the customer name size to 15 and made it bold.

5. **Naming:** Rename the sheet to **Customer Scatterplot**.

•	**Discount Impact on Sales and Profit (Box Plot):**
o	Use a Box Plot to visualize how different discount levels impact sales and profit.

•	**Region-wise Sales and Profit (Bar Chart):**
o	Create bar charts showing Sales and Profit by Region.

**Step 3: Assemble the Dashboard**
•	Combine these visualizations into a dashboard.
•	Add interactive filters, such as:
o	Category: Let users filter the data by product category.
o	Region: Filter by region.
o	Discount: Filter by discount levels.

**Interactivity:** We can add interactivity to a dashboard by creating filters. A quick look at our dashboard tells us that there is no time indicator on our dashboard
    
    - Lets create a time filter by creating a new sheet and drop **Order Date** on **Rows** which tells that there are 4 years 2014–2017.
    - In the Customer Scatterplot sheet, drag Order Date to the filters section and select years from the pop up window.
________________________________________

## Conclusion
In this project, we have used the Sample Superstore dataset to perform an analysis of sales and profits using Python and visualized the data in Tableau. This combination of Python (for deeper analysis) and Tableau (for visualization and storytelling) provides an effective way to communicate business insights.
By following the steps outlined above, you can perform a similar analysis on any dataset of interest, ensuring that you uncover valuable insights for decision-making processes.

