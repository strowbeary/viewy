import {View} from "../View/View";
import {Text} from "../Text/Text";
import "./Table.scss";
import {TEXT_STYLE} from "../Text/Text";

/**
 * Create a table row
 * @param {...View} columns the number of Column in parameter must me equal to the number of table's header
 * @return {View}
 */
export const Row = (...columns) => ({
    ...View(...columns.map(col => View(col).tagName("td")))
        .tagName("tr"),

})

/**
 * Create a table column
 * @param {String} name Column header name
 * @return {Column}
 */
export const Column = (name) => ({
    ...View()
        .tagName("col"),
    name,
    /**
     * Make column span on multiple column
     * @param {number} span column number
     * @returns {View}
     */
    span (span) {
        this.setAttribute("span", span);
        return this;
    }
})

/**
 * Generate a table
 * @param {Object} tableOptions Table options
 * @param {Column[]} tableOptions.columns
 * @param {Row[]} tableOptions.rows Array of rows
 * @return {View}
 */
export function Table ({ columns, rows  }) {
    return {
        ...View(
            View(
                ...columns.map(col => col.removeClass("view"))
            )
                .tagName("colgroup"),
            View(
                View(
                    ...columns.map(col => Text(col.name, TEXT_STYLE.label).tagName("th"))
                )
                    .tagName("tr"),
            )
                .tagName("thead"),
            View(...rows)
                .tagName("tbody")
        )
            .tagName("table")

    }
}
